# parent-to-child-communication

It is the process of passing data or values from a parent component to a child component in Lightning Web Components (LWC).
Think of it like this:
📦 Parent holds the data → 🧒 Child receives and uses it

🔑 Key Rule
✅ You must use the @api decorator in the child component to make its property public — so the parent can send values to it.
❗ @api is used only in child JS file, not in parent.

| Step | Who                     | Action                                                                             |
| ---- | ----------------------- | ---------------------------------------------------------------------------------- |
| 1️⃣  | Child Component (JS)    | Create a property and decorate it with `@api`.                                     |
| 2️⃣  | Child Component (HTML)  | Use the `@api` property to display or use the value.                               |
| 3️⃣  | Parent Component (JS)   | Define the data you want to send.                                                  |
| 4️⃣  | Parent Component (HTML) | Use the child component tag and bind the value using HTML attributes (kebab-case). |

💡 Why is @api needed?
It exposes the property publicly.
Only properties marked with @api in the child can be set via the parent’s HTML tag.
Think of @api as giving permission to the parent to set or pass a value to that property.




# Example

### `childComponent.js`
```js
import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message; // public property
}

### `childComponent.html`
```html
<template>
    <p>The message from parent is: {message}</p>
</template>


### `parentComponent.js`

```js
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    greeting = 'Hello from Parent!';
}

### `parentComponent.html`

```html
<template>
    <!-- Pass data to child -->
    <c-child-component message={greeting}></c-child-component> //message should be present in child js with @api decorated and greeting should be present in parent js with the value u want to pass
</template>


Parent JS → greeting = 'Hello from Parent!'
↓
Parent HTML → <c-child-component message={greeting}>
↓
Child @api property → message receives 'Hello from Parent!'
↓
Child HTML → displays "Message from parent: Hello from Parent!"

