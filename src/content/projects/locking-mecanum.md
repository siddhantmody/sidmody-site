---
title: "locking mecanum wheel"
description: "co-designed the first 4-inch locking mecanum. world championship innovate award."
year: "2021–2022"
role: "captain · mechanical co-designer"
org: "FTC 16461 infinite turtles"
tags: ["CAD", "iteration"]
order: 10
draft: false
---

## summary

co-designer of the first **4-inch locking mecanum wheel** as part of FTC 16461.
won the **Raytheon Innovate Award** at the FIRST world championships (1/6400 teams).

## background

mecanum wheels (rubber rollers oriented at 45° on a traditional wheelbase) are the most effective
omnidirectional wheels in FTC because they translate axially and laterally
with equal speed. that lateral capability comes with a drawback: nothing
resists horizontal pushing forces. since most FTC objectives involve robots
moving axially between two points, getting pushed sideways by another robot
is incredibly harmful to scoring speed.

**we set out to design a system that would give us both: omnidirectional
movement by default, switchable to axial-only on demand.**
![locking mecanum wheel CAD render](/projects/locking-mecanum/wheel-render.png)

## iteration

we went through **seven distinct mechanisms** over nine months. the
dominant challenge was scale: every prior locking mecanum implementation
lived at 10" or larger, and shrinking the form factor by 2.5x broke
assumptions that had held in the bigger versions.
![iteration progression](/projects/locking-mecanum/iterations.png)
the pattern that emerged: at 4" scale, the wheel creates challenges in ways
the 10" versions never faced. anything that depended on precise positioning,
high actuation torque, or stress concentration at small features failed
under repeated match loading. PLA melted from sustained contact heat.
servos couldn't deliver the torque the early grip-based mechanisms needed.
the high-angle plunger pin broke at exactly the geometry that gave it its
mechanical advantage.

v7 worked because it inverted the design constraint. instead of *gripping*
the rollers (which needs high force and tight tolerance), we let brass
spurs *dig* into the rubber (which is geometrically robust to manufacturing
variance and needs almost no actuation torque). CF-nylon body, brass tips,
servo-driven. ultimately, we ran for three months and 50+ matches with zero mechanical
failures.

## final design

a servo-driven linkage converts a single rotation into the activation of
five 3D-printed linkage pins with brass spurs on the ends. each spur digs
into two of the ten rollers on the wheel, stopping roller rotation while
still allowing the whole wheel to rotate. the result: horizontal force vectors
are blocked, while the wheel itself still drives normally.

measured performance vs. the unlocked omnidirectional state:
**1.4× tractive force**, **1.2× acceleration**.

the final linkage was printed in CF-Nylon. the early version pictured below
is PLA.

![linkage system in PLA](/projects/locking-mecanum/linkage-pla.png)

we ran the system for an entire season (**50+ matches**) with zero
mechanical failures, leading us to the **world championship innovate award**.

## what i took from it

- onshape CAD and FEA workflows within a fast-moving team
- FDM with multiple materials, settling on CF-nylon for the production parts
- how to actually run a multi-month iteration loop: one problem at a time,
  validate before moving on