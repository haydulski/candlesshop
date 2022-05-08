<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <title>@yield('title', $applicationName)</title>
    <meta name="description" content="" />

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.4.0/css/all.min.css">

</head>

<body class="sb-nav-fixed">

    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">{{ $applicationName }}</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            {{-- @guest --}}
            {{-- <li class="nav-item">
                    <a class="nav-link" href="#">{{ __('Login') }}</a>
                </li> --}}
            {{-- @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                    </li>
                @endif --}}
            {{-- @else --}}
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" v-pre>
                    {{-- {{ Auth::user()->name }} --}}
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>

                    <form id="logout-form" action="#" method="POST" class="d-none">
                        @csrf
                    </form>
                </div>
            </li>
            {{-- @endguest --}}
        </ul>
    </nav>



    <div id="layoutSidenav">
        @auth
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    @section('sidebar')
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                @include('shared.sidebar')
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                        </div>
                    @show
                </nav>
            </div>
        @endauth
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    @include('shared.messages')
                    @yield('content')
                </div>
            </main>
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted"></div>
                        <div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>


    <script src="{{ mix('/js/app.js') }}"></script>
    <script>
        const navbarLinks = document.querySelectorAll("#layoutSidenav_nav .sb-sidenav a.nav-link");
        if (navbarLinks.length > 0) {
            const path1 = window.location.href;
            navbarLinks.forEach(function(link) {
                if (link.getAttribute('href') === path1) {
                    link.classList.add('active');
                }
            })
        }
        const toggleSidebar = document.querySelector("#sidebarToggle");
        toggleSidebar.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
        })
    </script>
</body>

</html>
