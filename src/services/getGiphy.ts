import { GetGiphy } from './models/getGiphy.model';

export const getGiphy = async (category: string): Promise<any> => {
	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		// reject('error app')
	// 		// resolve(undefined);D
	// 		resolve(giphyData.data);
	// 	}, 1500);
	// });

	const result = await fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=gIUksHPV8oPwTeY8pxC2WNSfgLDkD5bv&q=${category}&limit=10`
	);
	const { data, meta }: GetGiphy = await result.json();
	if (meta.status !== 200) throw new Error(meta.msg);

	return data;
};
