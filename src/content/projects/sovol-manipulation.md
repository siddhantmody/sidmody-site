---
title: "turning a 3d printer into a manipulation platform"
description: "moonraker API, safety-hardened control, print-push-reorient pipelines"
year: "ongoing"
role: "undergraduate researcher"
org: "DAIR lab @ penn"
order: 1
draft: true
---

## disclaimer

most of this project is restricted until publication - many images, details, and results aren't shareable here.

## overview

ongoing research at the DAIR lab adapting a commercial 3D printer
(Sovol SV08) into a controllable manipulation platform. the printer's
gantry gives us repeatable cartesian motion in a known workspace, and
the bed gives us a controlled task surface - which makes it a 
capable testbed for contact-rich manipulation research at a fraction of
the cost of a dedicated arm and makes more tasks viable for enthusiasts or commercial operation.

i'm building the python control stack on top of the printer's
[moonraker API](https://github.com/Arksine/moonraker), developing the
end-effector hardware, and building automated print-push-reorient
pipelines for multi-stage tasks. the platform is intended to support
manipulation work where
low-cost, reproducible hardware matters.