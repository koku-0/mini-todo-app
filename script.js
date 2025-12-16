// 必要なDOM要素を取得
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// イベントリスナーの設定
addButton.addEventListener('click', addTask);
// リスト全体にクリックイベントを設定することで、どのタスクがクリックされても検知できるようにする
todoList.addEventListener('click', toggleComplete);

// タスクを追加する関数
function addTask() {
    const taskText = todoInput.value.trim();

    // 入力チェック
    if (taskText === "") {
        alert("何かタスクを入力してください。");
        return;
    }

    // 1. 新しいリストアイテム（<li>）を作成
    const listItem = document.createElement('li');
    
    // 2. タスクテキスト用の span を作成
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // 3. 削除ボタン (X) を作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    
    // 4. 削除ボタンにイベントリスナーを設定
    deleteButton.addEventListener('click', function(e) {
        // e.stopPropagation() で、タスク完了処理（toggleComplete）が同時に発火するのを防ぐ
        e.stopPropagation(); 
        todoList.removeChild(listItem);
    });

    // 5. リストアイテムに削除ボタンを追加
    listItem.appendChild(deleteButton);

    // 6. ToDoリストに追加し、入力欄をクリア
    todoList.appendChild(listItem);
    todoInput.value = "";
}

// 完了/未完了を切り替える関数
function toggleComplete(e) {
    // クリックされたのがリストアイテム（<li>）本体かどうかを確認
    if (e.target.tagName === 'LI') {
        // 'completed' クラスの付け外しを切り替える（CSSで打ち消し線が適用される）
        e.target.classList.toggle('completed'); 
    }
}