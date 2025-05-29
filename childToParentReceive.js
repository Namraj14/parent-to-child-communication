import { LightningElement } from 'lwc';

export default class ChildToParentReceive extends LightningElement {


    childMessage;

    handleParentEvent(event){
        this.childMessage = event.detail.message;
    }
}