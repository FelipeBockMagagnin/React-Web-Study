import {GameResponse, GameDetails} from '../Data/game';
import axios from 'axios';

class GamesProvider {
    public GetGames = async (url: string) : Promise<GameResponse> => {
        return (await axios.get(url)).data;
    }

    public GetGamesSearch = async (url: string, search: string): Promise<GameResponse> => {
        return (await axios.get(url + '?search=' + search)).data;
    }

    public GetGameById = async (id: number): Promise<GameDetails> => {
        return (await axios.get('https://api.rawg.io/api/games/' + id)).data;
    }
}

export default GamesProvider
