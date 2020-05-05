---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - python

includes:
  - api_keys
  - group
  - round
  - device
  - errors

search: true
---

# Introduction

Welcome to the Verge.AI API Documentation. You can use our API to manage groups, learning rounds, devices, user permissions, and API keys.

We have language bindings in Shell and Python. You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Getting Started

> In order to use the default production cloud gateway, use this code:

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
```

> Make sure to replace "...API Key Here..." with your API key

Using the API requires some configuration to be completed ahead of time:

1. API key: all API endpoints require authorization for access. API keys can be created through the Dashboard.

2. Cloud Gateway URL: the remote API that will be used to complete requests. Defaults are included in language bindings, but custom endpoints can be specified for use with Enterprise service offerings.

All following documentation assumes that you have followed the getting started guide.

# FAQ

1. Sometimes the API returns different information for the same request.

Verge.AI's Federated Learning platform is developed to support very distributed machine learning. Due to the distributed nature of the computation, data can sometimes take a few seconds to propagate through the system. This delay might result in stale data being returned or available to the system during the requested computation. Usually, these errors will resolve within a couple of seconds. If you are noticing persistent issues, please reach out to support.
