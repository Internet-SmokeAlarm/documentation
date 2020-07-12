---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - python

includes:
  - api_key
  - project
  - experiment
  - job
  - device
  - errors
  - logging

search: true
---

# Introduction

Welcome to the Verge AI API Documentation. You can use our API to manage projects, experiments, jobs, devices, user permissions, and API keys.

Documentation is provided for all language bindings that we offer. You can view code examples in the dark area to the right, and you can switch the language to use in the examples with the tabs in the top right.

# Getting Started

```python
import vergeai
vergeai.api_key = "...Your API Key Here..."

# You can now make API requests here!
```

Client setup requires an API key and an installation of your preferred language binding.

# Response Object Data

Depending on the language binding, data will be returned using different formats. Each format is demonstrated here.

```python
# make a call to the API
response = vergeai.Object.method(...parameters...)

# HTTP status code
response.status_code

# JSON data
response.data
```

When displaying response information throughout this documentation, the raw JSON response will be displayed.

- In the Python language bindings, the "body" element in the response JSON is mapped to the data attribute of the response object. The status code in the response JSON is mapped to the status code attribute in the response object.

# FAQ

1. Sometimes the API returns stale information.

Due to the distributed nature of the computation, data can sometimes take a few seconds to propagate through our system. As a result, queries can occasionally return stale data. Such errors will resolve within a few seconds in most cases. If you notice persistent issues, please reach out to support.
