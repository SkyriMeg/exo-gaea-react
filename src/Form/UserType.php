<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastName', TextType::class, [
                'required' => true,
                'label' => 'Nom'
            ])
            ->add('firstName', TextType::class, [
                'required' => true,
                'label' => 'Prénom'
            ])
            ->add('email', TextType::class, [
                'required' => true,
                'label' => 'Email'
            ])
            ->add('address', TextType::class, [
                'required' => true,
                'label' => 'Adresse'
            ])
            ->add('phone', TextType::class, [
                'required' => true,
                'label' => 'Téléphone'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
