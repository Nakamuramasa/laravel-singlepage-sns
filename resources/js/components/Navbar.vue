<template>
    <nav class="navbar navbar-expand navbar-dark blue-gradient">
        <a class="navbar-brand"><i class="far fa-sticky-note mr-1"></i>laravel sns</a>

        <ul class="navbar-nav ml-auto">

            <li class="nav-item">
                <a class="nav-link">ユーザー登録</a>
            </li>

            <li class="nav-item">
                <a class="nav-link">ログイン</a>
            </li>

            <li class="nav-item">
                <a class="nav-link"><i class="fas fa-pen mr-1"></i>投稿する</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <button class="dropdown-item" type="button">
                        マイページ
                    </button>
                    <div class="dropdown-divider"></div>
                    <button form="logout-button" class="dropdown-item" type="submit">
                        ログアウト
                    </button>
                </div>
            </li>
            <form id="logout-button" method="POST">
            </form>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>
