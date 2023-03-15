<?php

namespace App\Services;


class AgeCalculatorService
{
    public function getAge($birthday): int
    {
        $today = new \DateTime('now');
        $age = $today->diff($birthday)->y;

        return $age;
    }
}
