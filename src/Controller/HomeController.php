<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\AgeCalculatorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;


class HomeController extends AbstractController
{
    // #[Route('/', name: 'app_home')]
    // public function index(UserRepository $userRepository, AgeCalculatorService $ageCalculatorService): Response
    // {

    //     $users = $userRepository->findAll();

    // foreach ($users as $user) {
    //     $birthday = $user->getBirthDate();
    //     $age = $ageCalculatorService->getAge($birthday);
    // }
    // $birthday = $users[0]->getBirthDate();
    // $age = $ageCalculatorService->getAge($birthday);



    //     return $this->render('user/index.html.twig', [
    //         'users' => $users,
    //     ]);
    // }

    // public function __construct(
    //     private UserRepository $userRepository
    // ) {
    // }

    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }

    // #[Route('/users', name: 'users')]
    public function getUsers(UserRepository $userRepository, Serializer $serializer)
    {
        // test users
        $users = [
            [
                'id' => 1,
                'lastName' => 'Resu',
                'firstName' => 'John',
                'email' => 'j.r@orange.fr',
                'address' => '3 rue de la Loupe',
                'phone' => '06 48 56 34 32'
            ],
            [
                'id' => 2,
                'lastName' => 'Ures',
                'firstName' => 'Mike',
                'email' => 'm.u@orange.fr',
                'address' => '5 rue du Tarn',
                'phone' => '06 89 45 14 17'
            ]
        ];

        // $encoders = [new JsonEncoder()];
        // $normalizers = [new ObjectNormalizer()];
        // $serializer = new Serializer($normalizers, $encoders);

        // $users = $userRepository->findAll();


        // $jsonContent = $serializer->serialize($users, 'json');

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($users));

        // $response->setContent($jsonContent);

        return $response;
    }
}
