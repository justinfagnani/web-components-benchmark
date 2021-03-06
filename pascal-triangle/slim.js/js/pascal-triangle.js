let _length = 100;

function generateData(rows) {
    const n = rows;

    const data = [];
    data[0] = [1];
    data[1] = [1, 1];

    for (let row = 2; row < n; row++) {
        data[row] = [1];

        for (let col = 1; col <= row - 1; col++) {
            const prevRow = data[row - 1];
            data[row][col] = prevRow[col] + prevRow[col - 1];
            data[row].push(1);
        }
    }
    return data;
}

Slim.tag(
    'pascal-triangle',
    `
    <div>
        <button data-value="10" click="handleLoad">
            Load 10
        </button>
        <button data-value="100" click="handleLoad">
            Load 100
        </button>
        <button data-value="500" click="handleLoad">
            Load 500
        </button>
    </div>
    <div>
        <div s:repeat="list as line">
            <triangle-item s:repeat="line as item" text="{{item}}"></triangle-item>
        </div>
    </div>
    `,
    class PascalTriangle extends Slim {
        get useShadow() {
            return true;
        }
        onBeforeCreated() {
            this.list = generateData(_length);
            console.log(this.list);
        }
        handleLoad(e) {
            let length = parseInt(e.target.getAttribute('data-value'));
            this.list = generateData(length);
            console.log(this.list);
        }
    }
);
