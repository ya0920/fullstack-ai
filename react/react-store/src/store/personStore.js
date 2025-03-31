 
import axios from "axios";
import { makeAutoObservable } from "mobx";


class PersonStore {
    singers = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getSingers() {
        const res = await axios.get('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
        this.singers = res.data.data
    }
}
const personStore = new PersonStore();

export default personStore;