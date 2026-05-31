---
title: "NFL analytics: aggression, play-calling, and what actually wins games"
description: "two ML projects on NFL play-by-play data: causal inference on 4th-down aggression, and play recommendation for 3rd downs."
year: "2025-2026"
role: "team projects (cis 5200, cis 5450)"
org: "penn"
order: 2
draft: false
category: ml
tags: ["ml", "sports"]
---

## overview

two team projects applying ML to the same dataset (**NFLverse play-by-play, 1999-2024, ~1M+ plays**) from different angles. one asked a causal question about coaching strategy. the other asked a predictive question about play-calling. together they cover both halves of how ML can serve football: testing claims about the game, and making recommendations within it.

## project 1: does aggressive 4th-down coaching actually win games?

team final project for **CIS 5450 (big data analytics)** with michael aizenberg, sam plesner, and adam shamash. the analytics community has spent a decade arguing that the expected-value math favors aggression on 4th down, while many coaches have been arguing against this. we wanted to test the claim against the data instead of taking either side at face value.

we defined a custom **aggression index (AI)** as the fraction of 4th-down opportunities a team goes for it on, computed at the team-season level. a naive analysis showed that teams in the top 25% by AI had **lower** raw win rates than conservative teams. this looks like evidence against aggression, but this can be attributed to reverse causality - losing teams are forced to go for it on 4th down to stay in games, which inflates their go-rate.

once we controlled for team quality (average EPA per 4th-down attempt and conversion rate), the **aggression index flipped from a negative to a positive predictor of winning** - roughly 1-2% higher predicted win probability for strategically aggressive teams. execution quality ranked #1-2 in XGBoost permutation importance. aggression volume ranked mid-tier. it's not whether you go for it, it's whether you convert when you do.

**what i did:**
- hypothesis testing framework with permutation tests (10K permutations per hypothesis) and bootstrap confidence intervals (section 5)
- co-owned the aggression index feature engineering with michael (section 3)
- monte carlo simulation sampling 1000 synthetic team-seasons from each tier's feature distribution and running them through the trained XGBoost model to quantify the win probability delta (section 11)
- co-owned the model assessment and permutation importance analysis with adam (section 10)

## project 2: predicting the optimal 3rd-down play

team final project for **CIS 5200 (machine learning)** with kurtis zhang and maggie du. third down is the highest-leverage decision in football, and the run-vs-pass call is where coaches earn or lose drives. we built models to predict success probability for both options given pre-snap context, then selected the higher-probability play as the recommendation.

we tried two framings: a **dual-model approach** (separate networks for run and pass, compared at inference time) and a **unified conditional model** (single network with play type as an input feature). the best models achieved ROC-AUCs of 0.91 (run) and 0.95 (pass), significantly beating linear baselines.

**what i did:**
- **impact-weighted loss function:** standard binary cross-entropy treats every play equally. i implemented a weighted variant that scales each play's loss by 1/ydstogo, putting more learning pressure on short-yardage situations where the strategic decision matters most. this sharpened the decision boundaries in the recommendation heatmaps without sacrificing aggregate ROC-AUC.
- **transfer learning architecture (run → pass):** the run dataset is smaller and noisier than pass (41.7K vs 141.7K plays), so we used run-trained features as a starting point for the pass model. froze the shared layers from the weighted run network, attached a new pass output head, trained that head, then unfroze everything with a reduced learning rate. the transfer-learned model produced the most interpretable recommendation surface in the paper, closely matching NFL coaching heuristics.
- **offensive momentum feature:** the existing dataset has play context but no notion of in-drive rhythm. i defined momentum as a 3-play moving average of play success and field position relative to game and drive. it correlated weakly but meaningfully with success (0.16) and ranked in the top 6 permutation features. small but real signal in marginal decisions.
- **feature engineering and paper writeup.**

## tools

python (pandas, polars, numpy, scikit-learn, xgboost, pytorch, matplotlib, seaborn), SQL.

## what i took from it

- when sports data shows a counterintuitive raw correlation, the answer is almost always a confound from team quality. the methodological story (controlling for quality flips the sign) is more interesting than the original question.
- weighting a loss function by leverage shifts what a model learns to care about, not just how accurately it predicts. impact-weighted training doesn't really change aggregate ROC-AUC, but it changes which mistakes the model accepts. that's a useful lever when the metric you care about isn't the metric you can directly optimize.