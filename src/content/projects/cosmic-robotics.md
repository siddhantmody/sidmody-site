---
title: "cosmic robotics: simulation, calibration, and safety-critical controls"
description: "summer internship writing C++ across simulation, hardware, and real-time controls for solar panel manipulation robots."
year: "2026"
role: "robotics engineering intern"
org: "cosmic robotics (YC S26)"
tags: ["simulation", "c++", "controls"]
order: 0
draft: true
---

## disclaimer

cosmic builds solar panel manipulation robots and the codebase, architecture,
and internal tooling are proprietary. this writeup sticks to general scope
and skills, not implementation details.

## overview

summer 2026 internship at [cosmic robotics](https://www.cosmicrobotics.com/),
writing C++ for solar panel manipulation robots. i worked across a mix of
simulation tooling, mechanical/embedded hardware, and real-time safety-critical
controls, moving between whichever of those the team needed most at the time.

## what i did

my work fell into a few main buckets:

- **simulation tooling.** built out infrastructure connecting the robot
  software stack to a physics simulator, covering both teleoperated and
  autonomous pick-and-place control, and integrated simulated runs into
  automated testing.
- **camera calibration hardware.** designed and built a two-axis gimbal for
  sensor calibration and wrote the control software that drives it.
- **manipulator integration.** brought a new arm platform online end to end -
  kinematic modeling, motion planning integration, and validating autonomous
  control against it.
- **audio system.** reworked how the robot manages audio output across
  multiple software components so failures in one place couldn't affect
  others.
- **safety-critical collision checking.** evaluated and benchmarked
  GPU-accelerated approaches for real-time self-collision checking.

## tools

C++, python, ROS 2, a robotics physics simulator, MoveIt, CUDA, solidworks.

## what i took from it

- small PRs merge and big ones don't
- commit before you experiment, especially against shared state other
  people are also iterating on
- a bug that looks like a controls problem is sometimes a data/modeling
  problem one layer down
