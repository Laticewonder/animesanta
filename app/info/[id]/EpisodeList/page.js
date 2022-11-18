import info from '../../../../data/info.json'
import List from './List';
import { META } from "@consumet/extensions"

const anilist = new META.Anilist();

const Episodes = async ({params: {id}}) => {

    const info = await anilist.fetchAnimeInfo(id).then(data =>(data))

    return (
        <div className="episodes">
            <List info = {info}/>
        </div>
    );
}

export default Episodes;

