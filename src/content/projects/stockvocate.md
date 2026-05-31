---
title: "stockvocate: ml-driven trading infrastructure"
description: "dynamic neural network market prediction with 85% daily accuracy. building the full stack."
year: "ongoing"
role: "product development lead"
org: "stockvocate"
tags: ["ml", "infra"]
order: 1
category: ml
draft: false
---

## overview

stockvocate is a stock trading research startup building both the trading
algorithms and the end-to-end infrastructure that runs them. our core
strategy trades on leveraged S&P funds with a dynamic neural network
prediction layer feeding a regression + volatility model.

current backtested performance:

- **85% daily directional accuracy** on the prediction model
- **~220% average annual returns** in simulation
- **$100k+ in funds** running through the live trading infrastructure

we're trading on leveraged S&P funds with built-in market hedging, and the
results have consistently outpaced S&P benchmark growth across the
simulation windows we've evaluated.

{/* TODO: hero image — maybe a screenshot of a backtest equity curve or
    the dashboard, if there's anything shareable. */}

## what i'm building

a modular trading platform — core, trading, data, and communications
modules — that lets developers ship a new algorithm without rebuilding the
plumbing every time. the goal is to make it easy for any algorithm to get
real market interactions without burning weeks on infrastructure.

specific pieces i've worked on:

- **ml prediction pipeline**: dynamic neural network architecture for
  short-horizon directional prediction, feeding into a downstream regression
  model that sizes positions based on confidence
- **backtesting framework**: walk-forward evaluation with realistic
  slippage, commission, and execution latency modeling — so simulated
  results actually translate to live performance
- **alternative index trading strategies**: volatility-aware position sizing
  and hedging logic layered on top of the base directional model
- **infrastructure layer**: built on OCI, designed for low-latency market
  data ingestion and order execution

## stack

python, LightGBM, oracle cloud infrastructure, git. ml models in pytorch
for the dynamic prediction layer.

## what else

beyond the technical work, i led our initial funding round (commitments
from angel investors that translated directly into market gains) and led
the pivot from a pure-trading-algorithm company to an infrastructure
platform — a strategic call about what would actually build durable value
vs. just print short-term returns.

## what i took from it

- the gap between "the model has 85% accuracy" and "the model makes money
  in production" — execution costs, slippage, and ml drift all live in
  that gap
- building infrastructure for *other* developers to use changes how you
  write code; designing apis for unknown future algorithms is a different
  discipline than writing the algorithms yourself
- the hardest part of finance ml isn't the model — it's making sure
  backtest results aren't lying to you about how the model will perform live