---
title: "cosmic robotics: simulation infrastructure for solar panel manipulation"
description: "built a headless Isaac Sim bridge and nightly CI from nothing, plus a camera calibration gimbal and real-time collision checking."
year: "2026"
role: "robotics engineering intern"
org: "cosmic robotics (YC S26)"
tags: ["simulation", "c++", "controls"]
order: 0
draft: true
---

## disclaimer

cosmic builds solar panel manipulation robots and most of the codebase is
proprietary. this writeup sticks to general scope, architecture, and
skills without including proprietary numbers or source.

## overview

summer 2026 internship at [cosmic robotics](https://www.cosmicrobotics.com/),
writing C++ for solar panel manipulation robots. i started on a
lane-keeping controller, then shifted toward building simulation
infrastructure that didn't exist yet: an Isaac Sim bridge, teleop and
autonomy pipelines, and a nightly CI that runs pick-and-place headless with
zero hardware. alongside that i built a camera calibration gimbal, wired a
new arm platform's URDF into MoveIt, refactored audio playback, and
benchmarked collision-checking approaches for a real-time safety loop.

## what i did

**lane keeping.** wrote a cascading PID lane-keeping controller in my first
week and characterized the sensor pod's noise floor. wrote a hardware test
plan for it, then priorities shifted toward simulation infrastructure that
let the team iterate without needing robot time for every test.

**Isaac Sim bridge.** starting from nothing - no simulator, no bridge, no
groundwork - i built the bridge that connects the robot stack to Isaac Sim.
two constraints shaped the design: Isaac Sim runs its own Python outside
ROS, and Isaac Sim needs x86 + RTX while the robot stack targets arm64. the
solution was a shared-memory bridge (robot container <-> `/dev/shm` <-> Isaac
Sim container) with channels for arm commands, suction commands, and ground
truth pose. i first wrote it as a pybind module, then rewrote it as ctypes
over the C API two days later once the pybind approach showed friction
crossing the container boundary. the channel design is generic - any SHM
channel can drive any Isaac Sim piece - and currently drives the arm,
suction, and a target object's ground-truth pose.

**teleop to autonomy.** built arm control in joint space and Cartesian
space first, then drive. drive took a week and three attempts before
working; the first two dead ends looked like controller bugs but the actual
root cause was the URDF hierarchy. once teleop was solid I integrated it
with the autonomy commander and moved on to closed-loop autonomous
pick-and-place.

**sim as CI.** the end goal shifted from lane-keeping validation to running
full pick-and-place as a headless, deterministic nightly test with zero
hardware in the loop. getting there took three attempted batch merges and
about 5,000 lines of code before the CI job was reliable enough to run
nightly, which it now does.

**camera calibration gimbal.** designed and built a two-axis gimbal to hold
the full sensor pod during calibration sweeps, then wrote the Python library
that drives it. most of the work was mechanical and control tuning to kill
jitter enough to run a full calibration sweep cleanly.

**new arm integration.** built the URDF for a new arm platform on the
latest chassis revision and wired it into MoveIt, then validated the
autonomy stack end-to-end against mock perception. the URDF turned out to
be incomplete in ways that only showed up once collision checking needed
it (below).

**audio node refactor.** audio playback was previously single-sound, with
several processes each owning their own player and fighting over one
speaker - a fragile setup that could affect other systems when it failed.
replaced it with a standalone `audio_node` that any caller talks to over
D-Bus, mixing up to 8 voices with priority eviction so one owner controls
the speaker and failures stay contained. also got to resolder and rewire
the physical speakers.

**collision checking.** the team needed self-collision checking that could
run inside a real-time teleop guard on a tight embedded-GPU budget. I
benchmarked three approaches: CPU FCL (MoveIt's default) was an order of
magnitude too slow to fit the budget. GPU voxel SDF was the most accurate
but the heaviest on memory and runtime. GPU spheres were the fastest and
smallest by a wide margin and became the pick for self-collision, with
voxels flagged as the better fit for future world-collision /
motion-planning work where accuracy matters more than headroom.

## tools

C++, python, ROS 2, Isaac Sim, ctypes, MoveIt, D-Bus, CUDA (GPU collision
checking), solidworks.

## what i took from it

- small PRs merge and big ones don't - the CI work stalled at three
  separate batch-merge attempts before splitting it down got it landed
- commit before you experiment, especially against shared simulation state
  that other people are also iterating on
- a bug that looks like a controller problem is sometimes a data problem
  one layer down - the drive control dead ends were fixed by the URDF, not
  the controller
