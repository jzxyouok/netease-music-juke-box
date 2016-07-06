const NM_API_URL = "http://music.163.com/api";

export default class ServiceClient {

    getUserPlayLists(uid = "78843035") {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/user/playlist/`;
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            }).then(res => {
                if (res.code === 200 ) {
                    resolve(res.playlist);
                } else {
                    reject("Response with error code:" + res.code);
                }
            });
        });
    }

    getPlayListDetail(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/user/playlist/detail`;
                data: {
                    id
                }
            }).then(res => {
                if (res.code === 200 ) {
                    resolve(res.result.tracks);
                } else {
                    reject("Response with error code:" + res.code);
                }
            });
        });
    }
}
