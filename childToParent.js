import { LightningElement } from 'lwc';

export default class ChildToParent extends LightningElement {

    handleChildClick(){
        const childEvent = new CustomEvent('childevent', {detail: {message: 'This is coming from the Child'}});
        this.dispatchEvent(childEvent);
    
    }
}