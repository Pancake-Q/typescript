type Callback0 = <T>(item: T) => void;

type Callback1<T> = (item: T) => void;

const forEach = <T>(arr: T[], callback: Callback0) => {
	for (let i = 0; i < arr.length - 1; i++) {
		callback(arr[i]);
	}
};
forEach(['1', '2', '3', '4'], item => {});
