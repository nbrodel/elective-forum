import { observable, action } from 'mobx';

interface ITag {
    title: string
}

class TagStore {
    @observable tags: { title: string }[] = [{title: 'все'}]


}

export default new TagStore();
