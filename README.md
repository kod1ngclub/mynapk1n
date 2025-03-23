# mynapk1n

Minimal noteapp for idea-sketching

> Click [this][deployed] for use

## Issues and Contribute

If you want to contribute, or find an issue, please
join our discord server and tell about your idea.

[Join our discord][discord]

```txt
[model]
- Entity of app

[store]
- Interface of 'model'

[service]
- Action of app (Like OnNnn)
- Just use entity and interface of 'model' and 'view'

[service/shared]
- Humble things for service
- It can refer both 'model' and 'view' sticky

[view]
- Entity and interface of UI
- If value needed to be synced between model and view, MUST from model to view
```

[deployed]: https://mynapk1n.vercel.app
[discord]: https://discord.gg/hut3JP45Qf
