<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\AgeCalculatorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(UserRepository $userRepository, AgeCalculatorService $ageCalculatorService): Response
    {

        $users = $userRepository->findAll();

        // foreach ($users as $user) {
        //     $birthday = $user->getBirthDate();
        //     $age = $ageCalculatorService->getAge($birthday);
        // }
        $birthday = $users[0]->getBirthDate();
        $age = $ageCalculatorService->getAge($birthday);



        return $this->render('user/index.html.twig', [
            'users' => $users,
            'age' => $age,
        ]);
    }
}
