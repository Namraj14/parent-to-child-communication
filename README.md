# 🔁 Child to Parent Communication Flow in Lightning Web Components (LWC)

In LWC, **child-to-parent communication** is achieved using **custom events**. Here's how it works step by step:

---

## ✅ 1. Child Triggers an Event

In the child component’s JavaScript file, use `dispatchEvent()` to create and fire a custom event.

```js
// childComponent.js
const myEvent = new CustomEvent('notifyparent', {
            detail: { message: 'Hello from Child!' }
        });

this.dispatchEvent(myEvent);
```

- `eventname`: The name of the custom event.
- `detail`: Used to pass data to the parent component.

---

## 📤 2. Child Emits the Event

When a specific action occurs (e.g., button click), the child emits the custom event.

```js
 handleClick() {
        // Step 1: Create the event
        const myEvent = new CustomEvent('notifyparent', {
            detail: { message: 'Hello from Child!' }
        });

        // Step 2: Dispatch the event
        this.dispatchEvent(myEvent);
    }
}
```
 childComponent.html
```html
<template>
    <lightning-button label="Click Me" onclick={handleClick}></lightning-button>
</template>
```


---

## 👂 3. Parent Listens for the Event

In the parent component’s HTML file, where the child component is used, add an event listener:

```html
<!-- parentComponent.html -->
 <c-child-component onnotifyparent={handleNotify}></c-child-component>
```

- `onnotifyparent`: The event name that is used in child with on prefix (on+eventname)
- `handleNotify`: The parent method that handles the event. (This method will be in parent)

---

## 🧠 4. Parent Handles the Event

In the parent component’s JavaScript file, define the handler method:

```js
// parentComponent.js
handleNotify(event) {
    // Access the data sent from the child
    const messageFromChild = event.detail.message;
    console.log('Message from child:', messageFromChild);
}
```

---

## ✅ Summary

| Step | Description |
|------|-------------|
| 1    | Child dispatches event using `dispatchEvent()` |
| 2    | Child emits event on a user action |
| 3    | Parent listens for event using `on<eventname>` |
| 4    | Parent handles event in a JS method and accesses `event.detail` |

This is the standard approach for child-to-parent communication in LWC.
