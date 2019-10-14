# Staff of Deep Learning

Generate D&D items using deep language models, because why the hell not.

> **Staff of Deep Learning** (Rare). This Staff of Deep Learning parses words quickly, allowing it to comprehend and write cryptic and/or jumbled messages as large as 20 feet long. If the staff succeeds on a DC 20 Intelligence (Investigation) check, the creature is charmed by the text and can speak its command word, even though its hearing is paltry.

## Model

The model is OpenAI's GPT-2 (117M), fine-tuned on D&D 5e magic item descriptions.

## Examples

See cherry-picked samples in `examples.txt`.

## FAQs

**Why's it taking so long?**

It's running a 117M-parameter model, give it a hot second. Also I can't afford a better server.

**Does it work on mobile?**

This isn't a frequently asked question, but I just thought you should know: yes, it autocompletes on `ENTER` as well as `TAB`.

**I want one that generates <creatures, spells, places...>**

Get me the data and let's talk.
