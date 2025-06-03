import { LightningElement } from 'lwc';

export default class ParentToChildParent extends LightningElement {

    parentMessage;

    handleChildClick(){
        this.parentMessage = {
            Name: 'Namraj',
            Phone: '123456789',
            Email: 'namraj@example.com'
        };

    }
}