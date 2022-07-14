// @ts-nocheck
import { Location } from "./models/location.ts";
import { Review } from "./models/review.ts";
import { extension, Status } from "./mod.ts";
import { saveBlobData, loadBlobData } from "./lib/blob.ts";

const getReviewsAverageScore = async (id) => {
    const data = await Location.where('id', id).reviews();
    if(data.length === 0) {
        return null;
    }

    let averageScore = 0;
    data.forEach(review => {
        averageScore += review.score;
    });

    return averageScore / data.length;
}

const getLocations = async ({ response }: { response: any }) => {
    const data = await Location.all();
    data.map(async d => {
        d.score = await getReviewsAverageScore(d.id);
        return d;
    });
    response.body = data;
}

const getLocation = async ({ params, request, response }: { params: { id: number }, request: any; response: any }) => {
    const data = await Location.find(params.id);
    data.score = await getReviewsAverageScore(params.id);
    response.body = data;
}

const createLocation = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    const data = await body.value;
    await Location.create({
        name: data.name,
        address: data.address
    });

    response.body = { message: 'OK' }
    response.status = Status.OK;
}

const getReviews = async ({ params, request, response }: { params: { id: number }, request: any; response: any }) => {
    //const data = await Location.where('id', params.id).reviews();
    const data = await Review.where('locationId', '=', params.id).orderBy('createdAt', 'desc').take(10).get();
    response.body = data;
}

const createReview = async ({ params, request, response }: { params: { id: number }, request: any; response: any }) => {
    const body = await request.body();
    const data = await body.value;
    await Review.create({
        score: data.score,
        details: data.details,
        image: data.image,
        locationId: params.id
    });

    response.body = { message: 'OK' }
    response.status = Status.OK;
}

const processBlob = async ({ request, response }: { request: any; response: any }) => {

    /*if(request.hasBody === false) {
        response.status = Status.BadRequest;
        response.body = { status: "no body" };
        return;
    }*/
    
    //request.headers.get('content-type')
    /*if(fileExt === undefined) {
        response.status = Status.BadRequest;
        response.body = "invalid content-type";
        return;
    }*/

    const data: Uint8Array = await request.body().value;
    const uri = await saveBlobData(data, request.headers.get('content-type'));
    response.body = { resourceURI: uri };
}

const getBlob = async ({ params, request, response }: { params: { id: string }, request: any; response: any }) => {
    const data = await loadBlobData(params.id);
    response.body = data;
    request.status = Status.OK;
}

const getLocationCoverImage = async ({ params, request, response }: { params: { id: string }, request: any; response: any }) => {
    //const location = await Location.find(params.id);
    const coverReview = await Review.where('locationId', '=', params.id, 'and', 'image', '!=', 'null').orderBy('createdAt', 'desc').select('image').first();
    const data = await loadBlobData(coverReview.image);
    response.body = data;
    request.status = Status.OK;
}

export { getLocations, getLocation, getLocationCoverImage, createLocation, getReviews, createReview, processBlob, getBlob }