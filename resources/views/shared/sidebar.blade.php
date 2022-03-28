<a class="nav-link" href="{{ route('admin.home') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-home"></i></div>
    Panel
</a>

<a class="nav-link" href="{{ route('admin.me') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
    My details
</a>
<div class="sb-sidenav-menu-heading">Site</div>

<a class="nav-link" href="#">
    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
    Menu
</a>
<a class="nav-link" href="#">
    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
    Layout
</a>
<div class="sb-sidenav-menu-heading">Shop</div>
<a class="nav-link" href="{{ route('admin.products') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-folder-open"></i></div>
    Products
</a>
<a class="nav-link" href="{{ route('admin.product.add') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-folder-plus"></i></div>
    New product
</a>
<a class="nav-link" href="{{ route('admin.categories.all') }}">
    <div class="sb-nav-link-icon"><i class="far fa-list-alt"></i></div>
    Categories
</a>
<a class="nav-link" href="{{ route('admin.customers.all') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
    Customers
</a>

<a class="nav-link" href="{{ route('admin.orders.all') }}">
    <div class="sb-nav-link-icon"><i class="fas fa-cart-plus"></i></div>
    Orders
</a>
<a class="nav-link" href="#">
    <div class="sb-nav-link-icon"><i class="fas fa-sign-out-alt"></i></div>
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit"> Log out</button>
    </form>

</a>
