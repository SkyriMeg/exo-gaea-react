<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public const USERS = [
        [
            'lastName' => 'Wayne',
            'firstName' => 'Bruce',
            'email' => 'bruce.wayne@bat.com',
            'address' => '3 Allée de la Batcave',
            'phone' => '06 67 88 43 46',
        ],
        [
            'lastName' => 'Odyssey',
            'firstName' => 'Alexios',
            'email' => 'alexios.eureka@greece.com',
            'address' => '57 Chemin de Kephallonia',
            'phone' => '07 32 36 89 78',
        ],
        [
            'lastName' => 'Kokiri',
            'firstName' => 'Saria',
            'email' => 'saria.kokiri@mojo.com',
            'address' => '9 Chemin de l\'Arbre Mojo',
            'phone' => '07 14 25 15 86',
        ],
    ];

    public static int $userIndex = 0;

    public function load(ObjectManager $manager): void
    {
        foreach (self::USERS as $user) {
            $userNew = new User();
            $userNew->setLastName($user['lastName']);
            $userNew->setFirstName($user['firstName']);
            $userNew->setEmail($user['email']);
            $userNew->setAddress($user['address']);
            $userNew->setPhone($user['phone']);

            $manager->persist($userNew);
            $this->addReference('user_' . self::$userIndex, $userNew);
            self::$userIndex++;
        }

        $manager->flush();
    }
}
