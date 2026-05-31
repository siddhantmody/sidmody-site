---
title: "linked lunar rover hardware (NASA LuSTR TRUSSES)"
description: "5m spiral zipper arm + latching system for $2M NASA grant"
year: "2023–2025"
role: "undergraduate researcher"
org: "Modlab @ penn · NASA LuSTR"
tags: ["mech design", "FEA"]
order: 4
draft: false
---

## disclaimer

parts of this project remain restricted — some images and details
aren't shareable here.

## overview

hardware development for the **NASA LuSTR TRUSSES** project ($2M grant):
linked lunar rovers that mechanically connect to each other to overcome
obstacles, traverse craters, and avoid entrapment on the lunar surface.
i worked on the robot hexapod (RHex) rover platform and the linking mechanism that
makes the multi-rover formation possible.

## what i did

the arm system uses ModLab's [spiral zipper](https://www.modlabupenn.org/spiral-zipper/)
prismatic joint (Collins & Yim, ICRA 2016), a thin patterned strip that
zips into itself in a spiral to form a rigid tube extending up to 12x its
collapsed length. that mechanism is what unlocked our **10:1 strength-to-weight
ratio** and the 5m deployable arm form factor, while the broader design problem
was adapting it to the lunar mission constraints.

my contributions:

- **arm sizing and validation for LuSTR operating conditions.** validated the
  5m arm structure for **200N push / 300N pull capacity** via
  FEA and thermal-mechanical analysis. the lunar context drove different
  material choices, since the strip
  material had to survive thermal cycling and regolith abrasion that
  earth applications don't see.
- **latching mechanism for rover to rover connection.** the original latch
  used active alignment, which was failure-prone under positioning
  uncertainty between two rovers. i redesigned it as a **passive
  attachment** with latching points sized for a wider grasp radius, 
  trading some peak holding force for a much larger capture envelope.
  measured latching accuracy improved by **40%**, enough to enable
  reliable 2.5D truss formation between rovers.
- frame architecture improvements that distributed loads more evenly and
  gave us margin under simulated lunar conditions.

## tools

solidworks (CAD + FEA), FDM, laser cutting, milling.

## what i took from it

- regolith abrasion and thermal cycling drove material choices that
  wouldn't have come up in a terrestrial design review. operating
  environment is a real input, not a passive constraint.
- government program timelines have a different shape than university
  ones: tighter testing windows, continuous documentation, funding
  certainty that shifts with the political situation around space programs.