---
title: "c3+ / push anything: contact-implicit MPC for multi-object pushing"
description: "extending C3 to handle object-object collisions and arbitrary geometries, best paper finalist at ICRA 2026!"
year: "2025–present"
role: "undergraduate researcher"
org: "DAIR lab @ penn"
tags: ["MPC", "c++"]
order: 3
draft: false
---

## overview

c3+ and push anything are currently **a best paper finalist at ICRA 2026**!

c3+ is a contact-implicit MPC algorithm for multi-object planar pushing that
models short-horizon contact dynamics - including friction and inter-object
collisions - directly inside the optimization using complementarity constraints. 
it builds on the existing [C3 algorithm](https://arxiv.org/abs/2304.11259) 
from DAIR by extending it to handle the multi-body case 
the original formulation didn't.

push anything wraps c3+ with [BundleSDF](https://bundlesdf.github.io/) to
generate 3D meshes of novel objects on the fly, so the algorithm can solve
pushing tasks for previously-unseen geometries.

![c3+ pushing multiple objects](/projects/c3-plus/hero.png)

## what i did

two main contributions:

**generalization protocol for the sampling strategy.** i built the sampling
layer that uses normal vectors from the BundleSDF mesh's 3D geometry to
generate candidate contact points, which then feed into c3+ for MPC
optimization. tested on **40+ objects** with the full pipeline working
end-to-end.

**refactoring c3 to handle multi-object dynamics.** wrote ~2,000 lines of
C++ to extend the system dynamics and contact formulation so the MIQP solver
could handle object-object collisions efficiently. this is the work that
took c3 from "robot pushes one object" to "robot pushes multiple objects
that bump into each other."

## tools

C++, [drake](https://drake.mit.edu/), python. paper code coming with the
release.

## what i took from it

- the algorithmic solution was a few-equation reformulation that shifted the
  ADMM consensus problem into a regime where the solver actually converges
  quickly. small math edits created large runtime consequences.
- the sampling strategy took three tries to get right: uniform-outward
  broke on concave shapes, 2D slices broke on overhangs, normals broke on
  tall objects. each failure was geometry the previous version had
  assumed away.