---
title: "robotics has done this before"
description: "what self-driving's last decade tells us about the foundation model bet in robotics"
date: 2026-06-22
draft: false
---

In 2025, Waymo served 14 million rides and almost 4 million hours of end-to-end autonomous driving experiences across multiple US cities. As I've spent the last few weeks in San Francisco, people here trust Waymos, Zooxs, and other self-driving companies just as much as they trust ride shares or even their own driving. "Check if Waymo's cheaper" is a common refrain, one you would never have heard even 5 years ago. Foundation model robotics are at the stage self-driving was in roughly 2018: impressive demos, massive funding, unclear deployment timelines, and a debate between data-scaling believers and doubters that mirrors the Tesla-vs-Waymo era.

If foundation model robotics is following the same arc, we already have a decade of evidence about what works. The same debates are playing out in real time. The data-scaling-vs-structured-priors split that defined the Tesla-vs-Waymo era is now Physical Intelligence vs. World Labs. The pivots from generalist passenger autonomy to specialized verticals like trucking and freight (Aurora, Embark) are echoed in humanoid companies starting to converge on warehouse and industrial deployments. The production failures that ended Cruise and Argo AI are the stress tests that foundation model robotics hasn't faced yet but will. The discourse is largely dominated by what's possible in principle, not by what's actually getting deployed.

Three patterns from the last decade of self-driving transfer most directly.

## data-scaling bets take longer than their believers think

Pure data-centric approaches to self-driving do work, but their timeline expansion is larger than the early-stage pitches imply. In late 2019, Andrej Karpathy and Elon Musk projected solved autonomy in the near term based on their vision-only + fleet data bet. The approach hasn't cleanly delivered either way. Tesla is operating supervised robotaxi service in Austin (with safety drivers, on a Texas TNC license), and the fleet has crossed 8 billion FSD miles. But the projected unsupervised autonomy from 2019 hasn't materialized, and version-to-version safety metrics suggest the system isn't monotonically improving with more data. The fundamental bet (that data scale solves generalization) is being validated, but the timeline projections weren't. In a foundation model sense, this means companies like Physical Intelligence's π0 → π0.7 trajectory, Skild's data bet, or the broader "we can scale our way to complete generalist robots" thesis may be too optimistic. The companies that survive will be the ones with capital and runway to outlast the timeline expansion. The ones that don't will be examples of being right about the technology and wrong about the timing.

## hybrid approaches are underestimated

Learning approaches dominate the discourse, but hybrid approaches that integrate physics or structured priors quietly capture more economic value. Mobileye spent a decade getting dismissed as a company that "wasn't really a self-driving player" because they shipped driver-assist features with a hybrid rule-based and ML approach instead of betting on full autonomous learning. Now, their systems are in over 800 million vehicles, they generated around $2B in revenue in 2025, and they are profitable. Compare this to their pure-learning competitors: Cruise shut down after safety concerns, Argo AI shut down, Aurora pivoted to trucking, and Waymo is still working toward profitability. Hybrid approaches are consistently seen as less exciting or as stopgap solutions, but the self-driving evidence suggests the opposite: these combined policies ship to customers and last. The unsexy hybrid keeps winning while the world looks the other way.

## deployment economics matter more than technical capabilities

Cruise had a technically capable system in 2023, operating commercial robotaxi services in multiple cities with GM's backing and capital. They still failed, brought down by their handling of the October 2023 pedestrian incident - specifically failing to disclose key details to regulators - and a cost structure that wasn't supportable at their burn rate. Waymo, by contrast, has been slower and more methodical, which combined with Alphabet funding has led them to a dominant position at meaningful scale. While foundation model robotics is mostly pre-deployment, the lessons still apply: the winners won't be the ones with the most impressive lab demos or the most extensive capabilities. It'll be the companies with the right unit economics and the operational discipline to handle real-world incidents without imploding.

## mapping the foundation model bets

With these patterns in mind, we can map the three main current foundation model approaches against them: pure data-scaling, world models, and hybrid model-based + learned.

### pure data scaling (Physical Intelligence, Skild, and more)

The bet here is that generalist manipulation will come from massive demonstration data plus scaling laws, making an implicit claim that enough teleoperation data and scale will generalize any policy. On the timeline lens, these companies are the most exposed to expansion risk. Current pitches, if patterns from self-driving hold, are probably 3-5x too optimistic. Both PI and Skild are well-capitalized enough to survive significant timeline expansion. On deployment economics, the open question is whether the data-collection costs are sustainable at the scale required.

### world models (World Labs, Genie 2, and more)

The bet with world models is that you need a foundational 3D substrate to understand the environment before manipulation can scale. Give policies access to a learned model of objects and their contact dynamics and downstream manipulation tasks become tractable. These companies are looking further into the future, focusing on foundational research and not pushing into product deployment yet. By the Mobileye pattern, this kind of structured prior approach should capture more economic value over time - but only if the world model actually proves useful for downstream manipulation tasks. Whether their slower posture is Waymo-style discipline or pre-product-market-fit positioning is unclear, and probably won't resolve until they show concrete embodied applications.

### hybrid model-based (Symbotic, Path, and more)

The bet is to combine physics-grounded models with learned components, refusing to commit to either pure approach. Most actually-deployed robotics runs this way. Specialized companies like Symbotic, Path, and what I've personally seen at Cosmic are running it implicitly through their domain choices. Research like what I worked on with C3+ is running it explicitly through algorithm design. By all three lenses, this seems to be the strongest position right now: less exposed to timeline expansion because the approach ships at smaller scale, aligned with the Mobileye pattern from earlier, and already operating with deployment economics that work. The tradeoff is scope. Hybrid approaches don't promise a single generalist policy that does everything. But the self-driving evidence suggests that's a less important tradeoff than the discourse implies: the unsexy hybrid is what gets to revenue first, and the generalist policy can be added later if it ever arrives.

No single bet is obviously right yet. But the patterns predict where the risks accumulate, and they're not evenly distributed.

## what i'm watching

A few specific things I want to see in the next 12-24 months:

1. **Whether any data-scaling company hits real revenue from non-pilot customers.** This was the metric that consistently separated successful and failed self-driving companies, and it's the one that turns pitches into evidence. The first long-term paid contract is the inflection point.

2. **Whether world model companies show specific embodied applications.** The longer they stay in foundational research mode without showing concrete embodied applications, the more likely it is that their work gets folded into existing platforms rather than producing a standalone winner. Specific applications at industrial scale would signal real scalability.

3. **Whether any humanoid company publicly commits to a specific vertical.** Agility's pivot to warehousing is the case study. If Figure, Apptronik, or 1X commit to a vertical the way Agility did, it signals that the generalist bet is harder than pitched.

4. **Whether the data-collection moat thesis holds.** Tesla is the case study - they've crossed 8 billion FSD miles and still haven't delivered unsupervised autonomy, with version-to-version safety metrics suggesting diminishing returns from raw data alone. If teleop data for manipulation shows the same curve over the next 18 months, the pure-learning approaches that raised on the "data is the moat" thesis will face their first real stress test.

Self-driving's last decade doesn't deterministically predict foundation model robotics. But it's the only large-scale robotics deployment cycle we've actually watched play out, and the patterns are too consistent to ignore. The teams that navigated self-driving best weren't the ones with the strongest priors. They were the ones who updated fastest as evidence came in and built towards the real world.

Robotics has done this before, and that's worth taking seriously.