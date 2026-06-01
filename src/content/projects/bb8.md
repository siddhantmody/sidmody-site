---
title: "bb-8: a working star wars droid"
description: "16in rolling sphere with a magnetically-attached head, dual-ESP architecture, and a last-minute control-system pivot."
year: "2026"
role: "electronics + software lead"
org: "MEAM 3480 · penn"
tags: ["embedded", "esp32"]
order: 2
draft: false
---

## summary

ten-person team, one month, one working BB-8 droid.
**16-inch 3D-printed sphere** with a pendulum chassis inside, **magnetically
coupled head** that stays upright on caster wheels as the body rolls and
spins. i led electronics and software on the 3-person sub-team responsible
for making it actually move and respond to input.

![bb8 fully assembled](/projects/bb8/hero.png)

## the mechanical setup (what we had to work with)

- the sphere is driven by a high-torque motor on a central horizontal shaft
  that the internal chassis hangs from via bearings — so the body rolls
  while the chassis stays upright
- a second motor spins a **1.75 kg counterweight flywheel** at the bottom
  of the chassis, producing reaction torque that yaws the whole droid
- a vertical shaft inside the body holds magnets at the top that couple to
  matching magnets in the head while three ball-caster wheels let the head
  glide on the sphere as the body rotates underneath

## architecture

we needed to handle real-time motor control, RC input parsing, a wireless
camera stream from the head, speaker output, and WiFi across two
physically separated boards (the head is electrically isolated from the
body).

the initial plan was two ESP32-C3s talking over UART, based on our experience from other classes. an I/O allocation review killed that: the body controller
needed more pins than a C3 offered for all the actuators and RC receiver
channels. final architecture:

- **ESP32-S2 in the body**: parses RC PWM via interrupts, commands the
  Cytron MDD10A motor driver, runs the head-rotation servo, handles all
  drive logic
- **ESP32-C3 in the head**: drives an Arducam in continuous capture, serves
  an MJPEG stream over WiFi
- the two are electrically independent, sharing only a power bus from the
  3S LiPo (11.1V, 2200mAh). no inter-MCU comms since the head doesn't need to
  hear from the body

motor commands on the S2 used **software acceleration ramps** on both
drive and counterweight channels. early testing without ramps caused
abrupt torque spikes that destabilized the chassis and knocked the head
off the body, a seemingly mechanical failure with a software root
cause.

## the failure mode that mattered

the primary failure during integration wasn't electrical design, it was
**wire management inside a rotating chassis**. because the internal chassis
hangs from bearings on the central shaft, it swings and shifts as the ball
moves. wires routed naively got pulled on every rotation, popping
connectors loose mid-run.

the symptoms looked like software bugs at first: the drive motor would
cut out mid-operation, the battery would intermittently drop power, RC
control would behave erratically. we spent debug time chasing software
issues that were really mechanical fatigue on the wiring.

**root cause analysis** pointed at the RC signal wires specifically. the
receiver's wiring was among the most stressed paths inside the chassis,
and the intermittent connection issues were enough to corrupt the PWM
parsing on the S2.

## the pivot (day of demo)

with reliable RC compromised by the wiring issue and limited time before
demo, we **pivoted from RC-based control to an HTML interface
served directly from the ESP32-S2 over WiFi**. the S2 hosted a web page
with directional controls, parsed those inputs as motor commands instead
of PWM from a receiver, and we drove the demo from a phone.

this worked because:

- WiFi signal didn't depend on the stressed RC receiver wiring path
- we'd already prototyped HTML-served UIs on ESP32s in MEAM 5100, a mechatronics class that our whole subteam had taken
- the latency was acceptable for our demo driving area

we then went back and **fixed the underlying wire management**. we shortened
runs, taped connections to chassis features, and routed cables away from
surfaces contacting the rotating ball interior. the WiFi control ended up
in our final version since it allowed for better driving control.

## what got cut

two things from the CDR plan didn't make the final build:

- **the audio speaker burned out during integration**. we didn't have
  access to replacements, so the system was silent
- **the hard-stop watchdog** (RC-loss → motor halt) was omitted based on our 
  tightly controlled, line-of-sight testing environment

## tools

esp32-s2 + esp32-c3, c++ (arduino framework), cytron MDD10A motor driver,
FIT0186 12V DC motors (one for drive, one for the counterweight flywheel),
MG996R servo (head rotation), Arducam for MJPEG streaming, 3S LiPo,
solidworks + onshape for any mechanical interfaces i touched (improving 
the electrical mounting and the drive shaft gearing).

total project BOM: ~$190.

## what i took from it

- multi-board embedded architectures: choose the chip that fits your I/O
  budget, not the chip you used last semester
- the same failure can present as a software bug and a mechanical bug
  depending on which symptom you observe first, so always check wiring
  before chasing software
- electromechanical integration on a *rotating* chassis is a category of
  hard that isn't obvious from static prototype testing