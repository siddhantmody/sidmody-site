---
title: "hello, world"
description: "starting a blog about robotics, controls, and the gap between them"
date: 2026-05-20
draft: true
---

this is a placeholder post showing how the blog works. to write a new post,
drop a markdown file in `src/content/blog/`, give it frontmatter like this one,
and write whatever you want below.

## headings work normally

so do **bold**, *italics*, [links](https://example.com), and `inline code`.

```python
# code blocks too
def lqr_gain(A, B, Q, R):
    P = solve_continuous_are(A, B, Q, R)
    return np.linalg.inv(R) @ B.T @ P
```

> blockquotes get a small accent rule on the left.

set `draft: true` in the frontmatter to hide a post from the index while you
work on it. the file structure determines the URL — this one lives at
`/blog/hello-world/`.
