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

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
```

Using the API requires some configuration to be completed:

1. API key: all API endpoints require authorization for access. API keys can be created through the Dashboard.

2. Cloud Gateway URL: the remote API that will be used to complete requests. Defaults are included in language bindings, but custom endpoints can be specified for use with Enterprise service offerings.

# Default Cloud Gateway

Demo and production gateways are provided through the standard service. If you are using an Enterprise installation, API location information will be located in your dashboard.

`PROD : https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod`

`DEMO : https://5fr43pjmc4.execute-api.us-east-1.amazonaws.com/dev`

# FAQ

1. Sometimes the API returns different information for the same request.

Due to the distributed nature of the computation, data can sometimes take a few seconds to propagate through the system. As a result, queries can occasionally return stale data. Such errors will resolve within a few seconds in most cases. If you notice persistent issues, please reach out to support.
