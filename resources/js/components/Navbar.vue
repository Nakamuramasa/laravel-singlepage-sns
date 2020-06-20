<template>
    <nav class="navbar navbar-expand navbar-dark blue-gradient">
        <router-link class="navbar-brand" to="/"><i class="far fa-sticky-note mr-1"></i>laravel sns</router-link>

        <ul class="navbar-nav ml-auto">

            <li class="nav-item" v-if="!isLogin">
                <router-link class="nav-link" to="/register">
                    ユーザー登録
                </router-link>
            </li>

            <li class="nav-item" v-if="!isLogin">
                <router-link class="nav-link" to="/login">
                    ログイン
                </router-link>
            </li>

            <li class="nav-item" v-if="isLogin">
                <router-link class="nav-link" to="/articles/create">
                    <i class="fas fa-pen mr-1"></i>投稿する
                </router-link>
            </li>

            <li class="nav-item dropdown" v-if="isLogin">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <button class="dropdown-item" type="button">
                        マイページ
                    </button>
                    <div class="dropdown-divider"></div>
                    <router-link to="/logout" class="dropdown-item" type="button">
                        ログアウト
                    </router-link>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isLogin: false
        }
    },
    created(){
        if(User.loggedIn()){
            this.isLogin = true
        }
    },
}
</script>
