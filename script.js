document.getElementById('add-button').addEventListener('click', function() {
    const inputElement = document.getElementById('todo-input');
    const task = inputElement.value.trim();
    
    if (task !== "") {
        alert("タスクが入力されました: " + task);
        // この後のステップで、リストに追加するロジックを実装します
    } else {
        alert("何かタスクを入力してください。");
    }
});