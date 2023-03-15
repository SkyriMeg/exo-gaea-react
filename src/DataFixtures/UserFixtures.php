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
            'address' => '3 Allée de la Batcave 50117 GOTHAM',
            'phone' => '06 67 88 43 46',
            'birthDate' => '1915-04-07 07:30:00', //1915/04/07
        ],
        [
            'lastName' => 'Odyssey',
            'firstName' => 'Alexios',
            'email' => 'alexios.eureka@greece.com',
            'address' => '57 Chemin de Kephallonia 85770 GREECY',
            'phone' => '07 32 36 89 78',
            'birthDate' => '451-04-17 07:30:00', //451/04/17
        ],
        [
            'lastName' => 'Kokiri',
            'firstName' => 'Saria',
            'email' => 'saria.kokiri@mojo.com',
            'address' => '9 Chemin de l\'Arbre Mojo 14670 HYRULE',
            'phone' => '07 14 25 15 86',
            'birthDate' => '1998-12-11 07:30:00', //1998/12/11
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
            $userNew->setBirthDate(new \DateTime($user['birthDate']));


            $manager->persist($userNew);
            $this->addReference('user_' . self::$userIndex, $userNew);
            self::$userIndex++;
        }

        $manager->flush();
    }
}
