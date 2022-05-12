# Rate-a-loo
An app for rating restrooms everywhere

## Project Structure
There are two main components for this project.

1. Front End `/frontend`
This is the interface built using Svelte.

2. Back End `/backend`
This is the backend API and the static webhost.

-----

The project was built to be monolithic in nature. At a small scale I've found it is much easier to maintain.

The core pillar of design for this project is **Simplicity**:
It is very important that the simplest possible route be taken at all times. The less
tooling required to do the work, the better. I've found that complexity often leads to failure when working on small projects. This is why I have intentionally found ways to reduce the amount work required on my end.

As such, I have tried to use as few dependancies as possible, as little tooling as possible, and I have decided to sacrifice support for edge cases and potential optimizations in exchange for a fully functioning final product.

Later, I may return to optimize or fix edge cases as they occur in the real world, but trying to account for everything has always been a recipe for disaster.

-----
