<?php

namespace App\DataFixtures;

use App\Entity\Property;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class PropertyFixtures extends Fixture implements DependentFixtureInterface
{
    public const PROPERTIES = [
        [
            'name' => 'Batmobile',
            'value' => '100000',
            'type' => 'véhicule',
            'user' => 'user_0',
        ],
        [
            'name' => 'Lance de Léonidas',
            'value' => '450000',
            'type' => 'arme',
            'user' => 'user_1',
        ],
        [
            'name' => 'Ocarina',
            'value' => '170',
            'type' => 'instrument de musique',
            'user' => 'user_2',
        ],
    ];

    public static int $propertyIndex = 0;

    public function load(ObjectManager $manager): void
    {
        foreach (self::PROPERTIES as $property) {
            $prop = new Property();
            $prop->setName($property['name']);
            $prop->setvalue($property['value']);
            $prop->setType($property['type']);
            $prop->setUser($this->getReference($property['user']));

            $manager->persist($prop);
            $this->addReference('property_' . self::$propertyIndex, $prop);
            self::$propertyIndex++;
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}
