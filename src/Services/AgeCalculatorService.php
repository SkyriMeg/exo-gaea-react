<?php

namespace App\Services;

use App\Entity\User;

class AgeCalculatorService
{
    public function getAgeByUser(User $user): int
    {
        $birthday = $user->getBirthDate();

        $today = new \DateTime('now');
        $age = $today->diff($birthday)->y;

        return $age;
    }
}
