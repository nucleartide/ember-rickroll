
# ember-rickroll

> ♫♩ Never gonna give you up, never gonna let you down... ♫♩

![](assets/rick.gif)

An Ember component for surreptitiously playing Rick Astley's "Never Gonna Give
You Up". See the [demo][1].

## Installation

```bash
$ ember install ember-rickroll
```

## Usage

Put this in your template:

```hbs
{{rick-roll}}
```

Rickrolling occurs immediately after the component is invoked. You may want to
control your trolling with a boolean flag:

```hbs
{{#if shouldStartTrolling}}
  {{rick-roll}}
{{/if}}
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> GitHub [@nucleartide](https://github.com/nucleartide) &nbsp;&middot;&nbsp;
> Twitter [@nucleartide](https://twitter.com/nucleartide)

[1]: https://nucleartide.github.io/ember-rickroll

