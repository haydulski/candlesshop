<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&family=Jost:wght@400;500;700&display=swap"
        rel="stylesheet">
</head>

<body>
    @if ($errors->any())
        <div class="row">

            @foreach ($errors->all() as $item)
                {{ $item }}
            @endforeach


        </div>
    @endif
    <div id="main-root"></div>
    <script src="{{ mix('js/app.js') }}" defer></script>
</body>

</html>
