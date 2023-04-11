//応用情報技術者試験 平成30年春期問3 設問2
var dv = ["", -2, -1, 1, 2,  2,  1, -1, -2];
var dh = ["",  1,  2, 2, 1, -1, -2, -2, -1];
var M = 4, N = 3;
var m, n;
var board = [];
var printFlag;

var start_ms = Date.now(); //実行時間の計測用

function search(i, v, h)
{
    if (v >= 1 && v <= m) {
        if (h >= 1 && h <= n) {
            if (board[v][h] == 0) {
                board[v][h] = i;
                if (i == m*n) {
                    printBoard();
                    printFlag = 1;
                } else {
                    for (var j=1; j<=8; j++) {
                        search(i+1, v + dv[j], h + dh[j]);
                    }
                }
                board[v][h] = 0;
            }
        }
    }
}

function printBoard()
{
    for (var v=1; v<=m; v++) {
        for (var h=1; h<=n; h++) {
            document.write(board[v][h]+'.');
        }
        document.write('<br>'); //改行
    }
    document.write('<br>'); //改行
}

(function main()
{
    m = M, n = N;
    //boardの初期化
    for (var y=1; y<=m; y++) {
        board[y] = [];
        for (var x=1; x<=n; x++) {
            board[y][x] = 0; 
        }
    }
    printFlag = 0;
    search(1, 1, 1);
    if (printFlag == 0) {
        document.write('解答がありません。');
    }
})();

document.write('実行時間は、'+(Date.now() - start_ms)+'ミリ秒');