<?php
if (!function_exists('orderStatusName')) {
    function orderStatusName(int $id): string
    {
        switch ($id) {
            case 1:
                return 'New';
            case 2:
                return 'Checkout';
            case 3:
                return 'Failed';
            case 4:
                return 'Paid';
            case 5:
                return 'Shipped';
            case 6:
                return 'Delivered';
            case 7:
                return 'Returned';
            case 8:
                return 'Complete';
            default:
                return 'Undefined';
        }
    }
}
