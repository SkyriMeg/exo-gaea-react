<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\PropertyRepository;
use App\Repository\UserRepository;
use App\Services\AgeCalculatorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class UserController extends AbstractController
{
    // #[Route('/', name: 'app_user_index', methods: ['GET'])]
    // public function index(UserRepository $userRepository): Response
    // {
    //     return $this->render('user/index.html.twig', [
    //         'users' => $userRepository->findAll(),
    //     ]);
    // }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }

    #[Route('/users', name: 'users')]
    public function getUsers(UserRepository $userRepository, PropertyRepository $propertyRepository, SerializerInterface $serializer)
    {
        // test users
        // $users = [
        //     [
        //         'id' => 1,
        //         'lastName' => 'Resu',
        //         'firstName' => 'John',
        //         'email' => 'j.r@orange.fr',
        //         'address' => '3 rue de la Loupe',
        //         'phone' => '06 48 56 34 32'
        //     ],
        //     [
        //         'id' => 2,
        //         'lastName' => 'Ures',
        //         'firstName' => 'Mike',
        //         'email' => 'm.u@orange.fr',
        //         'address' => '5 rue du Tarn',
        //         'phone' => '06 89 45 14 17'
        //     ]
        // ];

        // $encoders = [new JsonEncoder()];
        // $normalizers = [new ObjectNormalizer()];
        // $serializer = new Serializer($normalizers, $encoders);

        // $jsonContent = $serializer->serialize($users, 'json');

        // $response->headers->set('Content-Type', 'application/json');
        // $response->headers->set('Access-Control-Allow-Origin', '*');

        // $response->setContent($jsonContent);

        // $response->setContent(json_encode($users));

        $users = $userRepository->findAll();

        $response = $this->json($users, 200, [], ['groups' => 'users:read']);

        return $response;
    }

    #[Route('user/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);

            return $this->redirectToRoute('app_home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('user/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(AgeCalculatorService $ageCalculatorService, User $user): Response
    {
        // $birthday = $user->getBirthDate();
        // if ($birthday) {
        //     $age = $ageCalculatorService->getAge($birthday);

        //     return $this->render('user/show.html.twig', [
        //         'user' => $user,
        //         'properties' => $user->getProperty(),
        //         'age' => $age,
        //     ]);
        // }

        $age = $ageCalculatorService->getAgeByUser($user);

        return $this->render('user/show.html.twig', [
            'user' => $user,
            'properties' => $user->getProperty(),
            'age' => $age,
        ]);
    }

    #[Route('user/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);

            return $this->redirectToRoute('app_home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('user/{id}', name: 'app_user_delete', methods: ['DELETE'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        // if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
        $userRepository->remove($user, true);
        // }
        return $this->redirectToRoute('app_home', [], Response::HTTP_SEE_OTHER);
    }
}
