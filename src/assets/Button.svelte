<script>
    export let type="primary";
</script>

<button class={type} on:click>
    <slot></slot>
</button>

<style>
    button{
        border: none;
        cursor: pointer;
        font-size: 12px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        background: rgb(214, 213, 213);
        color:#999;
        font-weight: bold;
    }

    .primary {
        margin-left: 10px;
        margin-top: 22px;
        padding: 8px 20px;
    }

    .primary:hover {
        background: #e6ae17;
        color: #fff;
    }

    .delete {
        padding: 8px 20px;
    }

    .delete:hover {
        background: #d12b2b;
        color: #fff;
    }
</style>