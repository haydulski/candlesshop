-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Czas generowania: 08 Maj 2022, 12:05
-- Wersja serwera: 5.7.37
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `lareact_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent_category` bigint(20) DEFAULT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_slug_unique` (`slug`),
  KEY `category_parent_category_index` (`parent_category`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `category`
--

INSERT INTO `category` (`id`, `parent_category`, `name`, `slug`, `desc`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Floral', 'floral-category', 'Reprehenderit aspernatur est possimus facilis soluta veniam saepe. Iusto odit fugiat veniam eum iste aut enim dolorum.', '2022-03-10 11:07:26', NULL),
(2, NULL, 'Oriental', 'oriental-category', 'Veniam praesentium dolore sapiente unde.', '2022-03-10 11:07:26', NULL),
(3, NULL, 'Woody', 'woody-category', 'Aut provident incidunt cumque qui rerum. Ut placeat dolores corrupti porro voluptas.', '2022-03-10 11:07:26', NULL),
(4, NULL, 'Fresh', 'fresh-category', 'Consequatur iste accusamus ea quibusdam animi modi aut.', '2022-03-10 11:07:26', NULL),
(7, NULL, 'New category 12', 'new-category-slug-4', 'Some description with mod', '2022-03-25 09:47:35', '2022-03-25 09:49:24');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2022_03_03_104840_create_products_table', 2),
(10, '2022_03_03_110404_create_category_table', 3),
(11, '2022_03_03_110818_create_product_categories_table', 3),
(13, '2022_03_03_123811_add_users_mobile_column', 4),
(14, '2022_03_03_131929_add_products_slug_column', 5),
(21, '2022_03_03_133445_create_orders_table', 6),
(22, '2022_03_03_133509_create_order_items_table', 7),
(23, '2022_03_03_133540_create_transactions_table', 7),
(24, '2014_10_12_200000_add_two_factor_columns_to_users_table', 8),
(25, '2022_03_23_201112_add_picture_column', 8),
(26, '2022_04_23_160534_add_users_guest_admin', 9);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `session_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` smallint(6) DEFAULT NULL,
  `tax` double(8,2) DEFAULT NULL,
  `sub_total` double(8,2) DEFAULT NULL,
  `shipping` double(8,2) DEFAULT NULL,
  `total_price` double(8,2) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_index` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `session_id`, `token`, `status`, `tax`, `sub_total`, `shipping`, `total_price`, `name`, `surname`, `mobile`, `email`, `street`, `city`, `province`, `country`, `message`, `created_at`, `updated_at`) VALUES
(1, 9, 'test-session', 'test-token', 3, 0.00, 782.00, 50.00, 832.00, 'Jan', 'Test', '888999777', 'jan@test.pl', 'ul. Testowa 1', 'Warszawa', 'mazowieckie', 'Polska', 'Lorem ipsum to dolit.', '2022-03-25 14:25:53', '2022-04-10 15:08:07'),
(2, 1, 'RnYTEgv1gCNHaihmGlkKW70i9Ey87VASmhmBdvWq', 'test-token', 1, 0.23, 400.00, NULL, 492.00, 'Damian', 'Test', '111222333', 'dd@gmail.com', 'testowa', 'Michałowo', 'podlaskie', 'polska', 'lorem', '2022-04-22 15:01:14', '2022-04-22 15:02:52'),
(3, 1, 'XrtWrK5Pqvm9QDLjYb7kA17dlSNRRMbw4qP3hp22', 'test-token', 1, 0.23, 400.00, 0.00, 492.00, 'Damian', 'Test', '456456456', 'dd@gmail.com', 'ul. Testowa 1', 'Michałowo', 'podlaskie', 'Polska', 'lorem ipsum', '2022-04-27 17:11:20', '2022-04-27 17:11:20'),
(4, 1, 'U0o2hpwWpJk77VI970QezdWkBZ6TL5tZFeUDhITR', 'test-token', 1, 0.23, 50.00, 10.00, 61.50, 'Damian', 'Test', '123123123', 'dd@gmail.com', 'ul. Testowa 1', 'Michałowo', 'podlaskie', 'Polska', 'lorem ipsum', '2022-04-28 10:28:10', '2022-04-28 10:28:10');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `order_qty` smallint(6) NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_order_id_index` (`order_id`),
  KEY `order_items_product_id_index` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `order_qty`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 9, 2, 391.00, '2022-03-25 15:05:37', '2022-03-25 15:05:37'),
(2, 2, 21, 2, 200.00, '2022-04-22 15:01:14', '2022-04-22 15:01:14'),
(3, 3, 21, 2, 200.00, '2022-04-27 17:11:20', '2022-04-27 17:11:20'),
(4, 4, 27, 1, 50.00, '2022-04-28 10:28:10', '2022-04-28 10:28:10');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'xxx', '4f3c537bb18b3ebcd31160cbc1f2b58e01286b4fd07835679d17dc86ccea24c7', '[\"*\"]', '2022-03-13 11:07:27', '2022-03-03 09:36:31', '2022-03-13 11:07:27');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `on_shop` tinyint(4) NOT NULL DEFAULT '0',
  `price` bigint(20) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `stock_qty` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_slug_unique` (`slug`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `title`, `picture`, `slug`, `on_shop`, `price`, `description`, `stock_qty`, `created_at`, `updated_at`) VALUES
(5, 'Super produkt', 'product_pictures/5.jpg', 'product-slug-test-7b', 1, 652, 'Cumque perferendis qui architecto aut alias. Tenetur et dolorem vel qui a. Perspiciatis qui pariatur eum sunt autem quidem. Ut consequatur harum consequuntur ullam.', 0, '2022-03-10 10:55:36', '2022-04-16 08:08:29'),
(7, 'Est sequi ad.', 'product_pictures/7.jpg', 'product-slug-6', 1, 985, 'Rem suscipit voluptatum ex. Dolorem minima molestiae quo voluptatem. Deleniti sit aliquam asperiores quibusdam.', 6, '2022-03-10 10:55:36', '2022-03-23 19:59:24'),
(8, 'Illo harum est iure.', 'product_pictures/8.jpg', 'product-slug-7', 1, 14, 'Error vero iusto quos delectus. Nemo nam repudiandae aut aut. Aut eveniet eos sint.', 3, '2022-03-10 10:55:36', '2022-04-12 09:51:56'),
(9, 'Occaecati voluptas provident id.', 'product_pictures/9.jpg', 'product-slug-8', 1, 831, 'Error cum eveniet sint magnam optio. Eos aperiam odio cum expedita. Ad ad qui eligendi placeat. Sit et exercitationem quo accusamus.', 2, '2022-03-10 10:55:36', '2022-04-12 09:52:05'),
(10, 'Nobis aut qui voluptas odio.', 'product_pictures/10.jpg', 'product-slug-9', 1, 925, 'Non dolorum sapiente unde ea. Dolor vero quae incidunt ratione et minus. Doloribus libero sed sit dolores qui repudiandae et. Libero placeat labore itaque aperiam exercitationem et.', 4, '2022-03-10 10:55:36', '2022-04-12 09:52:16'),
(11, 'Cupiditate dicta.', 'product_pictures/11.jpg', 'product-slug-10', 1, 443, 'Ad quaerat ut rerum quidem iusto. Quo optio iusto rerum enim. Itaque a quo mollitia. Atque ducimus voluptatem architecto iusto eum nulla.', 5, '2022-03-10 10:55:36', '2022-04-12 09:52:26'),
(12, 'Ex iure voluptas.', 'product_pictures/12.jpg', 'product-slug-11', 1, 322, 'In facilis dicta eaque. Alias eius et voluptatibus consectetur officiis accusamus aut. Nisi et tempore illo.', 3, '2022-03-10 10:55:36', '2022-04-12 09:52:35'),
(13, 'Quos et accusantium.', 'product_pictures/13.jpg', 'product-slug-12', 1, 447, 'Non aut doloremque incidunt ipsam ea nostrum cum nesciunt. A enim qui at eveniet. Incidunt aperiam consequatur non vitae quas voluptatem beatae.', 5, '2022-03-10 10:55:36', '2022-04-12 09:52:47'),
(14, 'Et dolorem corrupti.', NULL, 'product-slug-13', 1, 875, 'Voluptatum dolorem distinctio voluptas asperiores iure et. Sit ut eos ut tempore possimus. Doloremque inventore corporis reprehenderit assumenda.', 5, '2022-03-10 10:55:36', NULL),
(15, 'Tenetur aliquid molestiae molestiae omnis.', NULL, 'product-slug-14', 1, 632, 'Voluptatibus autem ut culpa natus ut id a. Voluptates laudantium labore consequatur voluptatibus assumenda. Nemo est occaecati ut animi repellat doloremque eum mollitia. Voluptas laudantium necessitatibus qui.', 4, '2022-03-10 10:55:36', NULL),
(16, 'Aliquid error maiores quis.', NULL, 'product-slug-15', 1, 661, 'Aut earum et quam aut ut esse harum. Molestiae velit tenetur asperiores nihil sit. Fugit quo deserunt voluptate sequi ex. Non facilis aspernatur sed sint ipsum quis.', 3, '2022-03-10 10:55:36', NULL),
(17, 'Inventore omnis sapiente dignissimos.', NULL, 'product-slug-16', 1, 777, 'Dolores voluptas iste fugiat minima odit. Odio officiis minus modi ducimus in voluptatem nam voluptatibus. Quia doloribus itaque maxime. Similique est nobis magnam officia labore.', 10, '2022-03-10 10:55:36', NULL),
(18, 'Laborum architecto quia.', NULL, 'product-slug-17', 1, 553, 'Minima officia adipisci consectetur aspernatur mollitia est quibusdam. In quas non ducimus esse. Recusandae dolorum quisquam similique odio quibusdam. Et enim dolorem eaque non.', 1, '2022-03-10 10:55:36', NULL),
(19, 'Necessitatibus et qui.', NULL, 'product-slug-18', 1, 621, 'Odit rerum dolore consectetur nihil numquam ut. Ut enim cum et corporis voluptatem et autem omnis. Accusamus officia incidunt aliquid nam. Eos quo reprehenderit recusandae pariatur.', 2, '2022-03-10 10:55:36', NULL),
(20, 'Tempore perspiciatis ducimus.', NULL, 'product-slug-19', 1, 428, 'Aperiam et nobis doloremque nesciunt qui. Repudiandae quasi quas eos molestias. Doloribus voluptatem dolor sed non fugiat officia odio. Quia fugit et aperiam.', 7, '2022-03-10 10:55:36', NULL),
(21, 'Diana nowość', 'product_pictures/21.jpg', 'produkt-diana', 1, 200, 'Omnis to solem raptum tro deum kosmadeum.', 10, '2022-03-12 12:10:13', '2022-04-11 18:40:08'),
(27, 'Test  dodania produktu 1', 'product_pictures/27-product.jpg', 'slug-for-product', 1, 50, 'lorem ipsum', 5, '2022-03-24 16:32:17', '2022-03-24 16:32:17');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` smallint(6) NOT NULL,
  `category_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_categories_product_id_index` (`product_id`),
  KEY `product_categories_category_id_index` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `product_categories`
--

INSERT INTO `product_categories` (`id`, `product_id`, `category_id`) VALUES
(55, 27, 4),
(50, 23, 2),
(49, 23, 1),
(62, 5, 4),
(47, 7, 4),
(56, 8, 4),
(57, 9, 3),
(58, 10, 4),
(59, 11, 2),
(60, 12, 4),
(61, 13, 1),
(14, 14, 3),
(15, 15, 3),
(16, 16, 2),
(17, 17, 1),
(18, 18, 2),
(19, 19, 4),
(20, 20, 1),
(54, 27, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `transaction_type` smallint(6) NOT NULL DEFAULT '0',
  `status` smallint(6) NOT NULL DEFAULT '0',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transactions_order_id_index` (`order_id`),
  KEY `transactions_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendor` tinyint(4) NOT NULL DEFAULT '0',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `guest_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_mobile_unique` (`mobile`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `mobile`, `vendor`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `created_at`, `updated_at`, `guest_admin`) VALUES
(1, 'Damian', 'Test', '111222333', 0, 'dd@gmail.com', NULL, '$2y$10$E8oxbklVupjMA9oKctnuiO.PZJAqn1ewaCJKGPHbF06rsvfUXu/dS', NULL, NULL, NULL, '2022-03-03 09:32:00', '2022-05-08 10:04:15', 0),
(10, 'Isaias', 'Rosenbaum', '931-570-4638', 0, 'elsa.okon@gmail.com', NULL, '$2y$10$IHDl4txBGqe5ODJfKTbDMu7Muc6/BhM33WvnoIDwJW2XMCCfjbe7G', NULL, NULL, NULL, '2022-03-10 11:34:34', NULL, 1),
(9, 'Jared', 'Leuschke', '609.826.3222', 1, 'jenifer57@gmail.com', NULL, '12345678', NULL, NULL, NULL, '2022-03-10 11:34:34', NULL, 0),
(8, 'Ines', 'Klocko', '+1-425-941-9535', 1, 'emmet.schmitt@hotmail.com', NULL, '12345678', NULL, NULL, NULL, '2022-03-10 11:34:34', NULL, 0),
(7, 'Brielle', 'Kertzmann', '(856) 246-7211', 1, 'lowe.minerva@yahoo.com', NULL, '12345678', NULL, NULL, NULL, '2022-03-10 11:34:34', NULL, 0),
(11, 'Lupe', 'Kulas', '678-947-4825', 1, 'sophia.howe@gmail.com', NULL, '$2y$10$IHDl4txBGqe5ODJfKTbDMu7Muc6/BhM33WvnoIDwJW2XMCCfjbe7G', NULL, NULL, NULL, '2022-03-10 11:34:34', '2022-03-28 15:18:09', 0),
(13, 'John', 'Test', '111222653', 0, 'john.test@gmail.com', NULL, '$2y$10$XL0nxoJsDRI0vGJ7kgYa/.p1evVfiS3aL9o1rZIUu/C94lOD4gyb2', NULL, NULL, NULL, '2022-04-26 16:34:15', '2022-05-08 10:05:30', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
