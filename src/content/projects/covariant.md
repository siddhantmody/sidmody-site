---
title: "robotic cell hardware @ covariant (acquired by amazon)"
description: "end effector design and validation across 28 warehouse pick-place cells"
year: "2024"
role: "mechanical engineering intern"
org: "covariant"
tags: ["manipulation", "end effectors"]
order: 3
draft: false
---

## disclaimer

a significant portion of this work - including most images - is covered
by NDA and can't be shared here. my writeup sticks to general scope
and skills.

## overview

summer 2024 internship on the hardware team at [covariant](https://www.aboutamazon.com/news/company-news/amazon-covariant-ai-robots),
the warehouse robotics automation startup that was acquired by amazon shortly after my internship ended.
i worked on the mechanical side of robotic pick-and-place cells deployed at
client sites.

## what i did

worked on **28 different cells** across the summer, taking on tasks from
initial prototyping through final benchmarking and validation before shipping
to site. my niche was the middle of the design cycle: prototyping improvements
and validating changes on cells that were already approaching
production-ready status.

most of my work fell into one of two buckets:

- **rapid prototyping**: spinning up custom end effector and item conveyance
  parts (30+ unique designs over the summer) using CAD, FDM, and outside
  manufacturing for aluminum and steel
- **iterative testing**: owning DOE execution across the cells, using GD&T
  practices and Duro PLM for change tracking

a recurring theme: the hardware had to leave room for the ML stack to do
its job. a lot of cell improvements weren't about making the gripper
stronger — they were about removing mechanical limitations that were
constraining what the ML algorithms could express.

## results

cell throughput (units per hour) increased by **up to 20%** across the 25+
cells i worked on directly, including amazon's vulcan cell.

## tools

onshape, FDM, laser cutting, mills and lathes, Duro PLM, python, bash.

## what i took from it

- distributed teams across multiple time zones - design reviews work
  differently when the people you depend on are six hours offset
- the discipline of validating before shipping when shipping means a
  physical install at a customer site
- a strong intuition for the hardware/software boundary in modern robotics
  cells: when to fix something mechanically vs. when to let the ML absorb it